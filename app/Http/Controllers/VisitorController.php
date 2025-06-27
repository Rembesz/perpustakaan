<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Cache;
use Carbon\Carbon;

class VisitorController extends Controller
{
    public function trackVisitor()
    {
        // Ambil dan tambah counter
        $count = Cache::get('online_visitors', 0);
        Cache::put('online_visitors', $count + 1);
        
        // Track pengunjung bulanan
        $this->trackMonthlyVisitor();
        
        return response()->json([
            'count' => Cache::get('online_visitors', 0)
        ]);
    }

    public function getOnlineVisitors()
    {
        // Ambil jumlah pengunjung online tanpa menambah counter
        $count = Cache::get('online_visitors', 0);
        
        return response()->json([
            'count' => $count
        ]);
    }

    public function trackMonthlyVisitor()
    {
        $currentMonth = Carbon::now()->format('Y-m');
        $monthlyKey = 'monthly_visitors_' . $currentMonth;
        
        // Increment pengunjung bulan ini
        $monthlyCount = Cache::get($monthlyKey, 0);
        Cache::put($monthlyKey, $monthlyCount + 1, now()->addMonths(12));
        
        // Simpan data untuk chart (6 bulan terakhir)
        $this->updateChartData();
    }

    public function getMonthlyVisitors()
    {
        $months = [];
        $visitors = [];
        
        // Ambil data 6 bulan terakhir
        for ($i = 5; $i >= 0; $i--) {
            $date = Carbon::now()->subMonths($i);
            $monthKey = 'monthly_visitors_' . $date->format('Y-m');
            $monthLabel = $date->format('M Y');
            
            $months[] = $monthLabel;
            $visitors[] = Cache::get($monthKey, 0);
        }
        
        return response()->json([
            'months' => $months,
            'visitors' => $visitors
        ]);
    }

    private function updateChartData()
    {
        $chartData = [];
        
        // Ambil data 6 bulan terakhir
        for ($i = 5; $i >= 0; $i--) {
            $date = Carbon::now()->subMonths($i);
            $monthKey = 'monthly_visitors_' . $date->format('Y-m');
            $chartData[] = Cache::get($monthKey, 0);
        }
        
        // Simpan data chart
        Cache::put('chart_visitors_data', $chartData, now()->addDays(1));
    }

    public function getChartData()
    {
        $chartData = Cache::get('chart_visitors_data', [0, 0, 0, 0, 0, 0]);
        
        return response()->json([
            'data' => $chartData
        ]);
    }

    // Fungsi untuk testing - tambah data dummy
    public function addTestData()
    {
        // Tambah data dummy untuk 6 bulan terakhir
        for ($i = 5; $i >= 0; $i--) {
            $date = Carbon::now()->subMonths($i);
            $monthKey = 'monthly_visitors_' . $date->format('Y-m');
            $dummyData = rand(50, 200); // Random data antara 50-200
            Cache::put($monthKey, $dummyData, now()->addMonths(12));
        }
        
        // Update chart data
        $this->updateChartData();
        
        return response()->json([
            'message' => 'Test data added successfully',
            'data' => Cache::get('chart_visitors_data', [0, 0, 0, 0, 0, 0])
        ]);
    }
} 