import React from 'react'
import ProfileCard from '../components/ProfileCard'

const About = () => {
  return (
    <div className='pt-14 md:pt-16 pb-10'>
      <section className="bg-gradient-to-br from-transparent to-purple-100 mb-12 py-12">
        <div className="container grid gap-4">
          <h2 className='text-2xl md:text-3xl font-bold text-slate-800'>About Our PC Compatibility Checker</h2>
          <div className='grid gap-4 text-gray-600 text-sm md:text-base'>
            <p>Computers have become an integral part of our lives, revolutionizing various industries and offering countless advantages in terms of efficiency and convenience. However, selecting compatible PC components can be a complex and time-consuming task, especially for non-experts. That's where our web-based PC compatibility checker comes in.</p>
            <p>At <span className='text-purple-600'>PCChecker</span>, we understand the challenges users face when building or upgrading their PCs. Our aim is to simplify this process by providing a user-friendly tool that ensures all hardware components work seamlessly together. With our compatibility checker, you can save time and avoid compatibility issues, allowing you to focus on enjoying your PC to its fullest potential.</p>
          </div>
        </div>
      </section>
      <section className='mb-12'>
        <div className="container grid place-items-center">
          <div className="text-center mb-6">
            <h2 className='text-2xl md:text-3xl font-bold text-slate-800'>Our Team</h2>
            <span className='text-gray-500'>Members</span>
          </div>
          <div className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-8 '>
            <ProfileCard name="John Gabriel Paderog" role="Developer" imgSrc="https://lh3.googleusercontent.com/pw/AIL4fc-qIi4lLMNvLTTHde5BMqvHsyhdvAMksnv2F9Pwmi4XO2N-0zGpnTZiaFc9TEKDeHnmCLGpIaTnqgkV0e9EcY_jsjQ8HXm_WskLcB9EDHwTvxja2kxODdn5H7mFUa3a9r_aj8T8JkiMLjfbPP8Xxl0W07A-nstxjOSlhRKvaAljNsn3itchLE0l-OF0Q8rg7pNjYoHk9txR8G9aEBXBY8iMhdrWR4rBrLJUoid_v_rvV416eXfBN04LPuWtpXcXvDneat5R7ytTUhqyV7lO8gcomxrs5tJaO2gaQs9-2wCwuHuPnTabp-fT9wSPLvSNaEu22fL0z_4tJ3i7nhjm36WEAUpnKDFzR3g192D4gckkV5UTeO4a1ROfK8vHsLX_lk6EpJMBYJfHfneYJQ_b33qsZaV2qYJZKU6ehj0v9oGbc5ttUvm5TFJIdXsp8vXFp9RONXhMc4v4mOOu8wnvgvIO7mhu8Xrwlx5gBvNnJWsCC-D6Vg59t56r6mSYHgIVSOYh5mDYFG1bubDZU5ZMpXsbFpJWzszSiPKLaJ2Sk-oEOANu4_ThRAxFU9QmoVsN1W3CQIgvZqVs1CU1XU-SNyuO408HFa0t_51atOLbr8BGOP3tQF2fUevptmE5xbokxQZm4dKOD823si-Ffw2_20PCTIh3SozTAXOjvqh-qygfkaxJYUi0jgPaRHAAtuOL_hBn9LxxKzr3Os4R3hINERbb2Yu__P2MAIcA0kw7kf0ctTB2gFtHCwYZy0a1TtEWa8hEhN251oYFfH9lZybIsOX5ZdadMPiqzMSzjgnDaqLJSaLTCjyAkN6kUC7XZ9CPabS2J-NKok1VtI_S5Ptj_4b29e7pVp2HzT-CN9DhblwhD_nOAr8dAp0FRtJJ5rmIcUyDRt7i-AvjAP8MWJ1_epvudf0MQJp038VlJVmZL1w8GJcgjkvshTQ_BAhY3ltGQiQ7d7nCLOty_mB5f_f-cxns9eZi9lKniDbR-OT1k3zf2wJ1DVbsFZELzhijlruI2xtZLaxtUKWgpt2Ne7ZZEO6zAk5332WjVjcBtL5_RXKP7fDbSCveJOWEIENCg8D_1WIXnKVZ63lGi3m5eEja_qLhy59SVrHWoEaYZTGYatVX97-6UhDPkGfE8eMVrdCWANBd6cEd0YkA5kBMKm_qU0d3FP6Qn6eXCLi39IO1KxW8j1bXVZc=w681-h681-s-no?authuser=0"/>
            <ProfileCard name="Cedrick Raden Dosel" role="Developer" imgSrc="https://scontent-mnl1-2.xx.fbcdn.net/v/t39.30808-1/246466180_2865893240368976_4836959938933899663_n.jpg?stp=c0.38.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGflOW9OAXSKzbTer8ESXhxAvoMNMASlZwC-gw0wBKVnLB1U01ONUXKtsAxyK4bE3ZJo4yGfnWQNWuoOyRVTgU1&_nc_ohc=NxDekJolraEAX-5H-Qs&_nc_ht=scontent-mnl1-2.xx&oh=00_AfCEa9ucU1-__okPu3XKFH16jS6cMTgV_2b0rvPeJu7khw&oe=64B8EF95"/>
            <ProfileCard name="Ken Jairul Murillo" role="Researcher" imgSrc="https://scontent.fmnl4-5.fna.fbcdn.net/v/t39.30808-1/354225673_5740952389339597_8585844817787915977_n.jpg?stp=dst-jpg_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEQVcTovTLxN_QdP45mED58EhtV3l8WUPoSG1XeXxZQ-hHNf-ML8jzP64Sa96IoyyIFSiPLjpmApH22X9OLsYgb&_nc_ohc=9Ki-UYjTLVgAX_PigIF&_nc_ht=scontent.fmnl4-5.fna&oh=00_AfDHIMRyChNpoYdOSXBYqS290CyCTICzVZNi6JuLm_gnxw&oe=64B833CB"/>
            <ProfileCard name="Glen Cuneta" role="Researcher" imgSrc="https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-1/349744234_224192216991091_919574587173687256_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeG17knPxUTvczh1jcnYsbdihfZR9GIXzL-F9lH0YhfMv8D_uo8-EKV3cgeIxAM10dKGPWHeRsQ5gPjFpYBFiVEp&_nc_ohc=M7I409GKB7gAX_nzf8P&_nc_ht=scontent.fmnl4-1.fna&oh=00_AfDXOKLuHHeKAogZwasMm-BxVhyOo3RseSmu__Zeot2-OA&oe=64B96F05"/>
            <ProfileCard name="Anthony Camposano" role="Researcher" imgSrc="https://scontent.fmnl4-5.fna.fbcdn.net/v/t39.30808-1/308675460_3368854790102818_3811364035900276954_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHW_SfXsSCM38nwWFYCuCnKSF4cSh2TSllIXhxKHZNKWSeqcBFGr8LSd2sS8aMp_vk56IqQt0RsugfBKRhDYFnH&_nc_ohc=aZMahvFMoukAX9ffwkJ&_nc_ht=scontent.fmnl4-5.fna&oh=00_AfDkTcLBDeOQNAcNe0RgktVxgc2b6fOYzsFPLpQeQQzXDw&oe=64B9876E"/>
            <ProfileCard name="Marck Darryl Pil" role="Researcher" imgSrc="https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/245206370_1767946390068238_1214229791115035037_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEt1apUaWU-XEERiz1mgKfEpaYoEL-Ys1KlpigQv5izUvbsMevBZJ6pqhGUi8EjG9N2yGe_M8P_Z9ZDDU5VkpVR&_nc_ohc=px7SCSBmCOoAX9ilPVd&_nc_ht=scontent.fmnl4-2.fna&oh=00_AfBpNHwrlNP1PRboUNv7bgn2UGWNhF29W3hfsaLZzQpIXw&oe=64B965F1"/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
