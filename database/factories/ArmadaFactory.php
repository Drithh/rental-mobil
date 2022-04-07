<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Armada>
 */
class ArmadaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'merk_id' => mt_rand(1, 20),
            'tanggal_pajak' => $this->faker->date(),
            'no_polisi' => $this->faker->vehicleRegistration('[A-Z]{1,2} [0-9]{1,4} [A-Z]{1,3}'),
            'kapasitas' => mt_rand(1, 10),
            'bahan_bakar' => $this->faker->vehicleFuelType(),
            'warna' => $this->faker->safeColorName(),
            'tipe_transmisi' => $this->faker->vehicleGearBoxType(),
            'tahun_perolehan' => $this->faker->year(),
            'harga_satuan' => mt_rand(1000000, 10000000),
            'poto_kendaraan' => $this->faker->imageUrl(),
        ];
    }
}
