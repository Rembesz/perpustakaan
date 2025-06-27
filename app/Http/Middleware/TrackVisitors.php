<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Carbon\Carbon;

class TrackVisitors
{
    public function handle(Request $request, Closure $next)
    {
        $visitorId = $request->ip() . '_' . $request->userAgent();
        $now = Carbon::now();
        
        // Simpan visitor dengan timestamp
        Cache::put('visitor_' . $visitorId, $now, now()->addMinutes(5));
        
        // Tambahkan visitor ke daftar keys jika belum ada
        $keys = Cache::get('visitor_keys', []);
        if (!in_array('visitor_' . $visitorId, $keys)) {
            $keys[] = 'visitor_' . $visitorId;
            Cache::put('visitor_keys', $keys, now()->addMinutes(5));
        }
        
        return $next($request);
    }
} 