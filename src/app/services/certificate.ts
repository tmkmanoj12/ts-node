import { userModel, User } from '../dal/models/user-model'
import { Observable } from 'rxjs/Observable'
import "rxjs/add/observable/fromPromise"
import { User as Iuser } from '../interfaces/dal/user-interface';
export class CertificationService {
    public async getName() {
        return new Promise( async (resolve, reject) => {
            const user = new User({
                email: 'Manoj',
                password: 'manoj',
                firstName : 'Manoj'
            })
            console.log('berore observ')
            // const res = await user.save()
            // console.log(res)
            const user$: Observable<userModel> = Observable.fromPromise(user.save())
            console.log(user$)
            user$.subscribe(
                (user: Iuser) => {
                    console.log('User',user)
                    resolve(user)
                },
                (error: Error) => {
                    console.log(error)
                    reject(error)
                },
                () => {
                    console.log('It is completed')
                }
            )

        })
    }
}