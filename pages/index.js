import styles from '@/styles/Home.module.css'

import { gql } from "@apollo/client";
import client from '../apollo-client';

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
 };
}


export default function Home({countries}) {

  console.log('countries: ', countries)

  return(
    <div className={styles.grid}>
      {countries.map((country) => (
        <div key={country.code} className={styles.card}>
          <h3>
            {/* <a 
              href="#country-name" 
              aria-hidden="true" 
              class="aal_anchor" 
              id="country-name"
            >
            </a> */}
            {country.name}
          </h3>
          <p>
            {country.code} - {country.emoji}
          </p>
        </div>
      ))}
    </div>
  )
  
  
}
