import { SearchBar, CurrentWeatherBtn, FiveDayForecastBtn } from '@/features'
import styles from './HeaderPage.module.scss';

const HeaderPage = () => (
  <header className={styles.header_page}>
    <div className={styles.header_content}>
      <SearchBar />
      <div>
        <CurrentWeatherBtn />
        <FiveDayForecastBtn />
      </div>
    </div>
  </header>
)

export default HeaderPage;