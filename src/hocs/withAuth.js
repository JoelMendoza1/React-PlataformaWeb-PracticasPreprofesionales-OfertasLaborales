/**
 * Created by chalosalvador on 8/16/20
 */
import withAuthRedirect from './withAuthRedirect';
import Routes from '../router/routes';
/**
 * Require the user to be authenticated in order to render the component.
 * If the user isn't authenticated, forward to the given URL.
 */
export default function withAuth( WrappedComponent, location = Routes.INICIOSESIONADMIN ) {
  return withAuthRedirect( {
    WrappedComponent,
    location,
    expectedAuth: true
  } );
}
