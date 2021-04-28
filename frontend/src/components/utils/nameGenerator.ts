import { fetch } from '../../store/csrf';

interface RoomName {
    data: { urlString: string };
}

const randomNameGenerator = async () => {
    const res: RoomName = await fetch('/api/nameGenerator');
    return res.data.urlString;
};

export default randomNameGenerator;
