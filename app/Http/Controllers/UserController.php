<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    public function getTotalUser()
    {
        return User::count();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        if ($request->user()->email_verified_at) {
            DB::update('update users set name = ?, email = ?,  nik = ?, jenis_kelamin = ?, tanggal_lahir = ?, alamat = ?, no_telp = ?, no_wa = ? where id = ?', [$request->name, $request->email, $request->nik, $request->jenisKelamin, $request->tanggalLahir, $request->alamat, $request->notelpon, $request->nowa, $request->user()->id]);
            return response()->json([
                "message" => "Profile berhasil diupdate",
                "success" => true
            ]);
        } else {
            return response()->json([
                "message" => "Emailmu Belum Terverifikasi!",
                "success" => false
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
