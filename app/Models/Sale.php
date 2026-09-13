<?php

namespace App\Models;

use Illuminate\Dabase\Eloquent\Attributes\Fillable;
use Illuminate\Dabase\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['user_id', 'total', 'cash_tendered', 'change_amount', 'status', 'notes'])]
class Sale extends Model
{
    protected $casts = [
        'total' => 'decimal:2',
        'cash_tendered' => 'decimal:2',
        'change_amount' => 'decimal:2',
    ];

    public function items(): HasMany
    {
        return $this - hasMany(SaleItem::class);
    }
}
