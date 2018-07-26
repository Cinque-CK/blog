import devConf from './develop'
import prodConf from './production'

const config = process.env.NODE_ENV === 'production' ? prodConf : devConf;
export default config;