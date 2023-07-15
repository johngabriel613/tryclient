import { Link } from "react-router-dom"
import { hero } from "../assets"
import { steps } from "../constant/constant"
import { Icon } from '@iconify/react';

const Home = () => {
  return (
    <div className="pt-20 md:pt-24 pb-10">
      <section>
        <div className="container grid place-items-center gap-4 mb-12">
          <div className="flex items-center gap-1 rounded-full bg-slate-100 p-1">
            <span className="text-xs bg-purple-600 rounded-full text-white px-4 py-1.5">Beta</span>
            <p className="text-sm font-medium text-slate-600">
              No account required.
            </p>
            <Icon icon="ic:round-chevron-right" width="24" height="24" className="text-slate-600"/>
          </div>
          <div className="w-full max-w-[850px] grid gap-2 text-center">
            <h1 className="text-5xl font-extrabold text-slate-800 md:text-6xl">Plan, Choose, and <span className="text-primary">Build</span></h1>
            <p className="text-slate-600 text-sm md:text-base">Discover the best parts <span className="text-primary">that fit your budget</span>, and start building your dream PC today! With our compatibility checker, you can <span className="text-primary">build with confidence</span>.</p>
          </div>
          <div className="w-full flex flex-col gap-2 text-center md:w-fit md:flex-row">
            <Link to='/builder' className="btn primary">Build now</Link>
            <Link to='/components/cpu' className="btn secondary flex items-center justify-center gap-1">
              <Icon icon="ph:squares-four-fill" />
              Browse All PC Components
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-transparent to-purple-100 mb-12">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row">
          <img src={hero} alt="" className="w-full max-w-[370px]"/>
          <div className="w-full grid gap-4 pb-6 md:pb-0">
            <h2 className="text-2xl font-bold text-slate-800 md:text-3xl">Is your PC Hardware Compatible?</h2>
            <p className="text-slate-600 text-sm md:text-base">For PC builders, whether you're a newbie or an expert, compatibility issues and bottlenecks in your dream PC build can be worrisome. But fret no more! Our user-friendly PC Compatibility Checker is here to help.</p>
            <Link to='/about' className="text-primary flex items-center gap-1">
              Learn more
              <Icon icon="heroicons:arrow-long-right-solid" width="32" height="32" />
            </Link>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <div className="container grid gap-6">
          <h2 className="text-2xl font-bold text-slate-800 md:text-3xl">How it works?</h2>
          <div className="flex flex-col gap-6 md:flex-row">
            {steps.map((step, index) => (
              <div key={index} className="w-full flex flex-col gap-4">
                <div className={`w-[60px] h-[60px] flex rounded-full p-3.5 ${step.background}`}>
                  <img src={step.icon} alt="" className="w-full"/>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 md:text-2xl">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
