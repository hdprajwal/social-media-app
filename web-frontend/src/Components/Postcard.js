import React from 'react'
import '../assets/main.css'

const Postcard = () => {
    return (
        <div class="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto p-2 bg-gray-800 rounded-lg shadow-xl">
            <div class="">
                <div class="flex">
                    <img src="https://homepages.cae.wisc.edu/~ece533/images/cat.png" alt="" class="h-6 w-6 rounded-full"/>
                    <h4 class="text-base text-white pl-1">Section</h4>
                    <p class="text-sm text-gray-500 pl-1">@username</p>
                    <p class="text-xs text-gray-600 pl-1">2h</p>
                </div>
                <h1 class="text-xl text-white">Title</h1>
                <img src="https://source.unsplash.com/random" alt="" class="object-scale-down w-full ..."/>
                <div class="flex">
                    <svg class="pt-1  ml-8" width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.2443 0.36084L0.914307 19.5873H8.09605V33.1737H20.393V19.5873H27.5747L14.2443 0.36084Z" fill="#FF4F4F"/>
                    </svg>
                    <p class="text-base text-white pt-2 pr-12">314</p>
                    <svg class="pt-1" width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.0044 33.1737L27.3344 13.9473H20.1526V0.360874H7.85566V13.9473H0.673922L14.0044 33.1737Z" fill="#68B7FF"/>
                    </svg>
                    <p class="text-base text-white pt-2 pr-12">314</p>
                    <svg class="pt-1" width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.34786 0.411743C1.24329 0.411743 0.347858 1.30717 0.347858 2.41174V15.8667L0.347168 15.8663V30.0747L9.09976 25.0214H31.1607C32.2653 25.0214 33.1607 24.1259 33.1607 23.0214V2.41174C33.1607 1.30717 32.2653 0.411743 31.1607 0.411743H2.34786Z" fill="white"/>
                    </svg>
                    <p class="text-base text-white pt-2 pr-12">314</p>
                    <svg class="pt-1" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.851 8.14775L9.41876 15.8649L8.5 14.0294L23.9323 6.31433L24.851 8.14775ZM23.9323 27.2202L8.5 19.5051L9.42081 17.6696L24.8531 25.3868L23.9343 27.2202H23.9323Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.8782 10.6149C29.238 10.6149 30.542 10.0747 31.5035 9.11318C32.465 8.15168 33.0052 6.84761 33.0052 5.48784C33.0052 4.12808 32.465 2.824 31.5035 1.8625C30.542 0.901005 29.238 0.36084 27.8782 0.36084C26.5184 0.36084 25.2144 0.901005 24.2529 1.8625C23.2914 2.824 22.7512 4.12808 22.7512 5.48784C22.7512 6.84761 23.2914 8.15168 24.2529 9.11318C25.2144 10.0747 26.5184 10.6149 27.8782 10.6149ZM27.8782 33.1737C29.238 33.1737 30.542 32.6335 31.5035 31.672C32.465 30.7105 33.0052 29.4064 33.0052 28.0467C33.0052 26.6869 32.465 25.3828 31.5035 24.4213C30.542 23.4598 29.238 22.9197 27.8782 22.9197C26.5184 22.9197 25.2144 23.4598 24.2529 24.4213C23.2914 25.3828 22.7512 26.6869 22.7512 28.0467C22.7512 29.4064 23.2914 30.7105 24.2529 31.672C25.2144 32.6335 26.5184 33.1737 27.8782 33.1737ZM5.31939 21.8943C6.67915 21.8943 7.98323 21.3541 8.94473 20.3926C9.90623 19.4311 10.4464 18.127 10.4464 16.7673C10.4464 15.4075 9.90623 14.1034 8.94473 13.1419C7.98323 12.1804 6.67915 11.6403 5.31939 11.6403C3.95962 11.6403 2.65555 12.1804 1.69405 13.1419C0.732548 14.1034 0.192383 15.4075 0.192383 16.7673C0.192383 18.127 0.732548 19.4311 1.69405 20.3926C2.65555 21.3541 3.95962 21.8943 5.31939 21.8943Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect x="0.192383" y="0.36084" width="32.8128" height="32.8128" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <p class="text-base text-white pt-2 pr-12">Share</p>
                    <svg class="pt-1" width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.850098 28.0722V1.41174H18.2819V28.0722L10.0787 19.869L0.850098 28.0722Z" stroke="white"/>
                    </svg>
                    <p class="text-base text-white pt-2">Save</p>
                </div>
            </div>
      </div>
    )
}

export default Postcard
