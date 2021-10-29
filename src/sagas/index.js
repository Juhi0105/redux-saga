import { all } from '@redux-saga/core/effects'
import imagesSaga from './imagesSaga'
import statsSaga from './statsSaga'

// import {takeEvery,take,call, put} from 'redux-saga/effects'

// import {IMAGES} from '../constants'
// // put-dispatch actions
// // create generators 

// function* handleImagesLoad() {//worker saga

//     console.log('fetching images from unsplash')
   

//     // console.log('Hey from workers')
//     // console.log(put({type:'ACTION_FROM_WORKER'}))
//     // yield put({type:'ACTION_FROM_WORKER'})
// }

// // function* byebyeSaga() {
// //     console.log('bye bye')
// // }

// function* handleDang() {
//     console.log('DANG!!')
// }

// watcher saga
// function* rootSaga() {


//     yield takeEvery(IMAGES.LOAD,handleImagesLoad)
//     yield takeEvery('DANG', handleDang)


    // yield takeEvery('HELLO', workerSaga)
    // yield take('HELLO') //puts saga in control 
    // and pulling action only once no matter how many time action is dispatcehd
    // yield call(workerSaga)
    // yield take('LOGOUT')
    // yield call(byebyeSaga)
// }
// watcher saga -> actions -> worker saga


function* rootSaga() {
    yield all([
        imagesSaga(),
        statsSaga()
    ])
}
export default rootSaga