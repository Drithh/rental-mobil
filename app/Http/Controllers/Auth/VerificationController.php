<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\VerifiesEmails;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\Request;
use App\Models\User;
use Carbon\Carbon;

class VerificationController extends Controller
{
    use VerifiesEmails;

    public function verify(Request $request)
    {
        $user = User::find($request->id);

        // do this check, only if you allow unverified user to login
        //        if (! hash_equals((string) $request->id, (string) $request->user()->getKey())) {
        //            throw new AuthorizationException;
        //        }


        if (!hash_equals((string) $request->hash, sha1($user->getEmailForVerification()))) {
            return redirect('/result/fail/unauthorized');
        }

        if ($user->hasVerifiedEmail()) {
            return redirect('/result/success/email-verified');
        }

        $user->email_verified_at = Carbon::now();
        $user->save();



        return redirect('/result/success/email-verified');

        // render vue
    }

    public function resendVerificationEmail(Request $request)
    {

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json([
                "message" => "Failed to send!",
                "success" => false
            ]);
        }

        $user->sendEmailVerificationNotification();

        return response()->json([
            "message" => "Check your email!",
            "success" => true
        ]);
    }
}
