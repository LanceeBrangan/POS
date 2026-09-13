<?php

namespace App\Models;

use Illuminate\Dabase\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['user_id', 'total', 'cash_tendered', 'change_amount', 'status', 'notes'])]
class Sale extends Model
{
    //
}
