import { Link } from 'react-router-dom';
import { Picture, Overview, Description, BadgesList } from '@components/camper';

import css from './Card.module.css';

export default function Card({
  id,
  name,
  price,
  rating,
  location,
  description,
  gallery: [poster],
  reviews,
}) {
  return (
    <li className={css.card}>
      <Picture poster={poster} alt={name} />

      <div className={css.cardBody}>
        <Overview {...{ price, rating, location, reviews, name }} isGrid />

        <div className={css.cardCenter}>
          <Description description={description} short />
        </div>

        <div className={css.cardBottom}>
          <BadgesList />
        </div>

        <Link className="pageLink filled" to={`${id}`}>
          Show more
        </Link>
      </div>
    </li>
  );
}
