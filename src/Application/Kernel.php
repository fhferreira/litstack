<?php

namespace Ignite\Application;

use Ignite\Crud\Repeatable;
use Ignite\Support\Facades\Crud;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\View\View;
use ReflectionClass;
use Symfony\Component\Finder\Finder;

class Kernel
{
    /**
     * Lit application instance.
     *
     * @var Lit\Application\Application
     */
    protected $app;

    /**
     * List of bootstrappers that should be executed before when the
     * kernel is initialized. They get executed in the given order.
     *
     * @var array
     */
    protected $bootstrappers = [
        Bootstrap\BootstrapKernel::class,
    ];

    /**
     * Lit application service providers.
     *
     * @var array
     */
    public $providers = [];

    /**
     * Create a new Lit kernel instance.
     *
     * @param \Ignite\Application\Application $app
     *
     * @return void
     */
    public function __construct(Application $app)
    {
        $this->app = $app;

        $this->bootstrap();
    }

    /**
     * Handle incomming route.
     *
     * @return void
     */
    public function handleRoute($route)
    {
        // TODO: ...
    }

    /**
     * Handle litstack::app view before it gets executed.
     *
     * @return void
     */
    public function handleView(View $view)
    {
        $this->build($view);

        //$this->extend($view);
    }

    /**
     * Get the bootstrap classes for the application.
     *
     * @return void
     */
    public function bootstrap()
    {
        $this->app->bootstrapWith($this->bootstrappers, $this);

        if (method_exists($this, 'mount')) {
            app()->call([$this, 'mount']);
        }
    }

    /**
     * Register the crud repeatables.
     *
     * @return void
     */
    public function repeatables()
    {
        //
    }

    /**
     * Build application for the given route.
     *
     * @param Illuminate\View\View $view
     *
     * @return void
     */
    public function build(View $view)
    {
        $this->app->build($view);
    }

    /**
     * Register repeatables in the given directory.
     *
     * @param  array|string $paths
     * @return void
     */
    protected function loadRepeatablesFrom($paths)
    {
        app()->afterResolving('lit.form', function () use ($paths) {
            $paths = array_unique(Arr::wrap($paths));

            $paths = array_filter($paths, function ($path) {
                return is_dir($path);
            });

            if (empty($paths)) {
                return;
            }

            $namespace = 'Lit\\';

            foreach ((new Finder)->in($paths)->files() as $repeatable) {
                $repeatable = $namespace.str_replace(
                ['/', '.php'],
                ['\\', ''],
                Str::after($repeatable->getPathname(), realpath(lit_path()).DIRECTORY_SEPARATOR)
            );

                if (! is_subclass_of($repeatable, Repeatable::class) ||
                (new ReflectionClass($repeatable))->isAbstract()) {
                    continue;
                }

                $name = Str::snake(Str::replaceLast(
                'Repeatable', '', class_basename($repeatable)
            ));

                Crud::repeatable($name, $repeatable);
            }
        });
    }
}
