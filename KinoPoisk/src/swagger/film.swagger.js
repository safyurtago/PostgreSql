


/**
 * @swagger
 * /api/film:
 *   post:
 *     summary: for create a new film
 *     tags: [users]
 *     description: Film create api's.
 *     requestBody:
 *        content:
 *          multipart/form-data:
 *            schema:
 *              type: object
 *              properties:
 *                 name:
 *                   example: Tom
 *                   type: string
 *                   required: true
 *                 description:
 *                   example: cristiano
 *                   type: string
 *                   required: true
 *                 year:
 *                    type: number
 *                    example: 998940102003
 *                    required: true
 *                 price:
 *                   type: number
 *                   example: 77792003
 *                   required: true
 *                 file:
 *                   type: string
 *                   required: true
 *                 video_url:
 *                   type: string
 *                   required: true 
 *                 release:
 *                   type: date
 *                   required: true
 *     responses:
 *       201:
 *         description: Create film.
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
 * /api/film/:id:
 *   get:
 *     summary: for find one
 *     tags: [users]

 *     responses:
 *       200:
 *         description: Fpund One.
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
 * /api/films:
 *   get:
 *     summary: for find one
 *     tags: [users]

 *     responses:
 *       200:
 *         description: Fpund all by filtered.
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
 */