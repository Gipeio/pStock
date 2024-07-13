<?php

namespace App\Http\Controllers;

use App\Models\FoodItem;
use Illuminate\Http\Request;

class FoodItemController extends Controller
{
    public function index()
    {
        return FoodItem::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'quantity' => 'required',
            'expiration_date' => 'required|date',
            'category' => 'required',
        ]);

        return FoodItem::create($request->all());
    }

    public function show(FoodItem $foodItem)
    {
        return $foodItem;
    }

    public function update(Request $request, FoodItem $foodItem)
    {
        $request->validate([
            'name' => 'required',
            'quantity' => 'required',
            'expiration_date' => 'required|date',
            'category' => 'required',
        ]);

        $foodItem->update($request->all());
        return $foodItem;
    }

    public function destroy(FoodItem $foodItem)
    {
        $foodItem->delete();
        return response()->noContent();
    }
}
