import ApplicationLogo from '@/Components/ApplicationLogo';
import { primary } from '@/Contexts/ColorContext';
import { Link } from '@inertiajs/react';
import { alpha } from '@mui/material';
import LogoEverprimary from 'resources/assets/logo';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            <div>
                <Link href="/">
                    <LogoEverprimary primary={alpha(primary,0.7)} size={100}/>
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
