


/**
 * @swagger
 * /api/user/payment:
 *   post:
 *     summary: for create payment
 *     tags: [users]
 *     description: user payment create api's.
 *     requestBody:
 *        content:
 *          multipart/form-data:
 *            schema:
 *              type: object
 *              properties:
 *                 balance:
 *                   example: Tom
 *                   type: number
 *                   required: true
 *     responses:
 *       201:
 *         description: Create payment.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: succesfull
 *                 data:
 *                    type: object
 *                    example: {data}
 * /api/user:
 *   post:
 *     summary: Create user
 *     tags: [Admins]
 *     requestBody:
 *        content:
 *          multipart/form-data:
 *            schema:
 *              type: object
 *              properties:
 *                 username:
 *                   example: Tom
 *                   type: string
 *                   required: true
 *                 password:
 *                   example: Tom
 *                   type: string
 *                   required: true
 *                 fullname:
 *                   example: Tom
 *                   type: string
 *                   required: true
 *     responses:
 *       201:
 *         description: Create User.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: succesfull
 *                 data:
 *                    type: object
 *                    example: {object}
 *
 * /api/user/:id:
 *   get:
 *     summary: for find one
 *     tags: [users]

 *     responses:
 *       200:
 *         description: Found all by filtered.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: succesfull
 *                 data:
 *                    type: array
 *                    example: array
 * /api/user/statistics:
 *   get:
 *     summary: getting stats
 *     tags: [users]
 *    
 *     responses:
 *       201:
 *         description: getting stats.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: succesfull
 *                 data:
 *                    type: object
 *                    example: {object}
 * 
*/