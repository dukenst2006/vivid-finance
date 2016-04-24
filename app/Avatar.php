<?php

namespace VividFinance;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Avatar
 *
 * @package VividFinance
 * @property integer $id
 * @property string $file
 * @property integer $user_id
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \VividFinance\User $user
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Avatar whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Avatar whereFile($value)
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Avatar whereUserId($value)
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Avatar whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\VividFinance\Avatar whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Avatar extends Model
{

    /**
     * @var array
     */
    protected $fillable = [
        'file'
    ];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }


    /**
     * Method used to retrieve the full file path
     *
     * @return string
     */
    public function getFullFile()
    {
        return $this->getFilePath() . '/' . $this->file;
    }


    /**
     * @return string
     */
    public function getFilePath()
    {
        return storage_path() . '/users/' . $this->user_id;
    }
}
