<?php

namespace App\Transformers;

class InvoiceTransformer extends Transformer
{

    /**
     * Transformer for the models
     *
     * @param \App\Invoice $invoice The model from the database
     *
     * @return array The valid output, displayed in the API
     */
    public function transform($invoice)
    {
        return [
            'id'              => (int) $invoice->id,
            'customer_id'     => (int) $invoice->customer_id,
            'title'           => $invoice->title,
            'state'           => $invoice->state,
            'file'            => $invoice->file,
            'is_recurrent'    => (bool) $invoice->is_recurrent,
            'recurrence'      => $invoice->recurrence,
            'expiration_date' => $invoice->expiration_date->toDateTimeString(),
            'creation_date'   => $invoice->created_at->toDateTimeString()
        ];
    }
}