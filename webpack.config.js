'use strict';
module.exports = {
  entry: {
    'home': 'app/web/page/home/index.ts'
  },
  lib: ['vue', 'vuex', 'vue-router', 'vuex-router-sync', 'axios'],
  loaders: {
    babel: false,
    typescript: true
  },
  plugins: {
    copy: [{
      from: 'app/web/asset',
      to: 'asset'
    }]
  }
};