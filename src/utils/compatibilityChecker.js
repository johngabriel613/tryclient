export const checkCPUAndMotherboardCompatibility = (user) => {
  if (
    user.components[0]?.id?.socket_type &&
    user.components[1]?.id?.socket_type &&
    user.components[0].id.socket_type !== user.components[1].id.socket_type
  ) {
    return {
      errorName: 'CPU and Motherboard Compatibility',
      errorMessage: 'CPU and motherboard socket types are not compatible.  Note: Incompatibility may result in system boot failure or incorrect CPU performance.',
    };
  }
  return null;
};

export const checkCPUAndMemoryCompatibility = (user) => {
  if (
    user.components[0]?.id?.ram_type?.length &&
    user.components[2]?.id?.ram_type?.length &&
    !user.components[0].id.ram_type.some(cpuRamType =>
      user.components[2].id.ram_type.includes(cpuRamType)
    )
  ) {
    return {
      errorName: 'CPU and Memory Compatibility',
      errorMessage: 'CPU and memory RAM types are not compatible. Note: Incompatibility may lead to system instability, crashes, or inability to utilize the full memory capacity.',
    };
  }

  if (
    user.components[0]?.id?.max_ram_freq &&
    user.components[2]?.id?.ram_freq &&
    user.components[0].id.max_ram_freq !== user.components[2].id.ram_freq
  ) {
    return {
      errorName: 'CPU and Memory Compatibility',
      errorMessage: 'CPU and memory frequencies are not compatible. Note: Incompatibility may result in system instability, crashes, or inability to reach the maximum memory frequency.',
    };
  }
  return null;
};


export const checkMotherboardAndMemoryCompatibility = (user) => {
  if (
    user.components[1]?.id?.ram_type &&
    user.components[2]?.id?.ram_type &&
    user.components[1].id.ram_type !== user.components[2].id.ram_type
  ) {
    return {
      errorName: 'Motherboard and Memory Compatibility',
      errorMessage: 'Motherboard and memory RAM types are not compatible. Note: Incompatibility may lead to system instability, crashes, or inability to utilize the full memory capacity.',
    };
  }

  if (
    user.components[1]?.id?.max_ram_freq &&
    user.components[2]?.id?.ram_freq &&
    user.components[1].id.max_ram_freq !== user.components[2].id.ram_freq
  ) {
    return {
      errorName: 'Motherboard and Memory Compatibility',
      errorMessage: 'Motherboard and memory frequencies are not compatible. Note: Incompatibility may result in system instability, crashes, or inability to reach the maximum memory frequency.',
    };
  }
  return null;
};

export const checkGPUAndMotherboardCompatibility = (user) => {
  if (
    user.components[3]?.id?.pcie_x16 &&
    user.components[1]?.id?.pcie_x16 &&
    user.components[3].id.pcie_x16 !== user.components[1].id.pcie_x16
  ) {
    return {
      errorName: 'GPU and Motherboard Compatibility',
      errorMessage: 'GPU and motherboard are not compatible. Note: Incompatibility may result in inability to install the GPU properly or suboptimal GPU performance.',
    };
  }
  return null;
};


export const checkPsuCompatibility = (user, wattage) => {
  if (
    user.components[4]?.id?.output &&
    wattage &&
    user.components[4].id.output <= wattage
  ) {
    return {
      errorName: 'PSU Compatibility',
      errorMessage: 'PSU Compatibility. Note: It may damage your components if not compatible.'
    };
  }
  return null;
};

