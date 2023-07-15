import {cpu, motherboard, gpu, memory, psu, plan, choose, build} from '../assets'

export const navLinks = [
  {
    'name': 'Home',
    'path': '/'
  },
  {
    'name': 'About',
    'path': 'about'
  },
  {
    'name': 'Components',
    'path': 'components',
    'dropdowns': [
      {
        'name': 'CPU',
        'path': 'components/cpu',
        'icon': cpu
      },
      {
        'name': 'Motherboard',
        'path': 'components/motherboard',
        'icon': motherboard
      },
      {
        'name': 'GPU',
        'path': 'components/gpu',
        'icon': gpu
      },
      {
        'name': 'Memory',
        'path': 'components/memory',
        'icon': memory
      },
      {
        'name': 'PSU',
        'path': 'components/psu',
        'icon': psu
      },
    ]
  }
]

export const steps = [
  {
    'icon': plan,
    'background': 'bg-sky-100',
    'title': 'Plan',
    'desc': 'Determine your needs and budget. Use our compatibility checker to find parts that meet your requirements.'
  },
  {
    'icon': choose,
    'background': 'bg-orange-100',
    'title': 'Choose',
    'desc': 'Select the best options for your build. Compare components to ensure they work together flawlessly.'
  },
  {
    'icon': build,
    'background': 'bg-red-100',
    'title': 'Build',
    'desc': 'With our compatibility checker, you can rest assured that all parts are compatible and your build will be successful.'
  }
]
