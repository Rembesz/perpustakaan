<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;

class EncryptIds
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Get all route parameters
        $routeParameters = $request->route()->parameters();
        
        foreach ($routeParameters as $key => $value) {
            // Check if the parameter looks like an encrypted ID
            if (is_string($value) && strlen($value) > 20) {
                try {
                    $decryptedValue = Crypt::decryptString($value);
                    // Only decrypt if it's a numeric value (ID)
                    if (is_numeric($decryptedValue)) {
                        $request->route()->setParameter($key, $decryptedValue);
                    }
                } catch (\Exception $e) {
                    // If decryption fails, it might not be encrypted, so continue
                    continue;
                }
            }
        }

        return $next($request);
    }
} 