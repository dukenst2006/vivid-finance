<?php

namespace App\Transformers;

use App\Invoice;

class InvoiceTransformer extends Transformer
{

    /**
     * Transformer for the models
     *
     * @param Invoice $invoice The model from the database
     *
     * @return array The valid output, displayed in the API
     */
    public function transform($invoice)
    {
        return [
            'id'         => (int) $invoice->id,
            'user_id'    => (int) $invoice->user_id,
            'title'      => $invoice->title,
            'created_at' => $invoice->created_at->toDateTimeString()
        ];
    }
}