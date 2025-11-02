import { SearchBar, CurrentWeatherBtn, FiveDayForecast } from '@/features'
import styles from './HeaderPage.module.scss';

const HeaderPage = () => (
  <header className={styles.header_page}>
    <div className={styles.header_content}>
      <SearchBar />
      <div>
        <CurrentWeatherBtn />
        <FiveDayForecast />
      </div>
    </div>
  </header>
)

export default HeaderPage;