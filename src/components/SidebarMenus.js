import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons'
export const SidebarMenus = [
    {
        name: "Upload an Image",
        path: '/',
        icon: <FontAwesomeIcon icon={faUpload} size="sm"/>
    },
    {
        name: "See All Photos",
        path: '/photos',
        icon: <FontAwesomeIcon icon={faPhotoVideo} size="sm"/>
    }
]