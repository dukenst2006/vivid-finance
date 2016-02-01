<?php namespace VividFinance\Transformers;


abstract class Transformer
{

    public abstract function transform($item);

    public function transformCollection(array $items)
    {
        return array_map([$this, 'transform'], $items);
    }
}