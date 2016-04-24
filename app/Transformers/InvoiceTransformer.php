<?php

namespace VividFinance\Transformers;

/**
 * Class InvoiceTransformer
 * @package VividFinance\Transformers
 */
class InvoiceTransformer extends Transformer
{

    /**
     * Transformer for the invoice
     *
     * @param \VividFinance\Invoice $invoice The invoice from the database
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
            'expiration_date' => $invoice->expiration_date->toDateString(),
            'creation_date'   => $invoice->created_at->toDateString()
        ];
    }
}