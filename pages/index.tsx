import React from 'react'
import Link from 'next/link'

export default() => (
    <ul>
        <li>
            <Link href='/blog'>
                <a>BLOG</a>
            </Link>
        </li>
        <li>
            <Link href='/travels'>
                <a>TRAVELS</a>
            </Link>
        </li>
    </ul>
)