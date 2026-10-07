'use client'
import React, { useState , useEffect} from 'react';

import { from } from 'node:stream/iter';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@heroui/react';

const HeaderPage = () => {

      const date = new Date().toLocaleDateString("bn-BD" ,{
        dateStyle: 'full'
      })
  
  console.log(date)
  return (
    <div className='container mx-auto grid grid-cols-3'>
      <div><Image src={"/assets/Favicon.png"} height={80} width={80} alt='Logo' className='rounded-2xl'></Image></div>
      <div>
        <Image src={'/assets/NamePlate.png'} height={100} alt='namePlate' width={400}></Image>
        <p>{date}</p>
      </div>
      <div>
        <Link href={'/'}>সাইন ইন</Link>
        <Link href={'/'}><Button>সাইন আপ</Button></Link>
      </div>
    </div>
  );
};

export default HeaderPage;