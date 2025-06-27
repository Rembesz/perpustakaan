<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class LikeController extends Controller
{
    private $likesFile;
    
    public function __construct()
    {
        $this->likesFile = storage_path('app/likes.json');
        if (!File::exists($this->likesFile)) {
            File::put($this->likesFile, json_encode([
                'section1' => 0,
                'section2' => 0,
                'section3' => 0
            ]));
        }
    }

    public function getLikes()
    {
        $likes = json_decode(File::get($this->likesFile), true);
        return response()->json($likes);
    }

    public function handleLike(Request $request, $sectionId)
    {
        $likes = json_decode(File::get($this->likesFile), true);
        if (!isset($likes[$sectionId])) {
            $likes[$sectionId] = 0;
        }
        $likes[$sectionId]++;
        File::put($this->likesFile, json_encode($likes));
        
        return response()->json([
            'likes' => $likes[$sectionId]
        ]);
    }

    public function handleUnlike(Request $request, $sectionId)
    {
        $likes = json_decode(File::get($this->likesFile), true);
        if (!isset($likes[$sectionId])) {
            $likes[$sectionId] = 0;
        }
        if ($likes[$sectionId] > 0) {
            $likes[$sectionId]--;
        }
        File::put($this->likesFile, json_encode($likes));
        return response()->json([
            'likes' => $likes[$sectionId]
        ]);
    }
} 