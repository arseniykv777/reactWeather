import { SearchBar, CurrentWeatherBtn, FiveDayForecastBtn } from '@/features'
import { BackButton } from "@/shared/ui/";

import styles from './HeaderPage.module.scss';

const HeaderPage = () => (
  <header className={styles.header_page}>
    <div className={styles.header_content}>
      <BackButton />
      <SearchBar />
      <div>
        <CurrentWeatherBtn />
        <FiveDayForecastBtn />
      </div>
    </div>
  </header>
)

export default HeaderPage;