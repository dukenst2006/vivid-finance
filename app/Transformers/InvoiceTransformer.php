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
            'id'              => (int)$invoice->id,
            'company_id'      => (int)$invoice->company_id,
            'title'           => $invoice->title,
            'state'           => $invoice->state,
            'file'            => $invoice->file,
            'file_path'       => $invoice->file_path,
            'file_name'       => $invoice->file_name,
            'file_extension'  => $invoice->file_extension,
            'expiration_date' => $invoice->expiration_date->toDateString(),
            'creation_date'   => $invoice->created_at->toDateString()
        ];
    }
}