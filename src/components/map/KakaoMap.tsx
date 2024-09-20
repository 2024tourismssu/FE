import { Map } from 'react-kakao-maps-sdk'
import { useContentStore } from '@/stores/contentStore.ts'

const KakaoMap = () => {
   const { mapX, mapY } = useContentStore()
   if (!mapX || !mapY) {
      return <div>지도를 로드할 수 없습니다.</div>
   }
   return <Map center={{ lat: parseFloat(mapX), lng: parseFloat(mapY) }} style={{ width: '300px', height: '300px' }} level={3} />
}
export default KakaoMap
