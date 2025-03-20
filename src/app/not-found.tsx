'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/Container';

export default function NotFound() {
    return (
        <Container>
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
                <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    Sayfa Bulunamadı
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Aradığınız sayfa mevcut değil veya taşınmış olabilir.
                </p>
                <Link
                    href="/"
                    className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                    Ana Sayfaya Dön
                </Link>
            </div>
        </Container>
    );
} 