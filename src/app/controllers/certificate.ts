import { Router, Request, Response, NextFunction } from 'express'
import { CertificationService } from '../services/certificate';

export class CertificateController {

    public router: Router

    constructor(private certificationService: CertificationService) {
        this.router = Router()
        this.routes()
    }

    private routes() {
        this.router.get('/kumar', this.read)
    }
    private read = async (req: Request, res: Response, next: NextFunction) => {
        console.log("this is url", req.originalUrl)
        try {
            let result = await this.certificationService.getName()
            res.json(result)
            next()
            return 
        } catch (e) {
           res.status(500)
           res.json(e)
           next()
        }
    }
}