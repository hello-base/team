const configuration = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#07364a'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 0.8,
      random: false
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 60,
      color: '#07364a',
      opacity: 0.8,
      width: 2
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'right',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  }
};

export default configuration;
