


/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: for create
 *     tags: [Auth]
 *     description: Auth create api's.
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
 *                 fullname:
 *                   example: cristiano
 *                   type: string
 *                   required: true
 *                 password:
 *                   type: string
 *                   example: 77792003
 *                   required: true
 *     responses:
 *       201:
 *         description: Create admin.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: succesfull
 *                 data:
 *                    type: string
 *                    example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTY4ZDFlLWUzNTctNDgzNS05YzM2LTMzMGY3MmEyYjJhNiIsImlhdCI6MTY5MTgyNzA1MSwiZXhwIjoxNjkyMDg2MjUxfQ.YBAK3LZ0ByOTKh7ttBGS9voDtjSjq_zyBHkKbzqArYc
 * /api/auth/login:
 *   post:
 *     summary: for login
 *     tags: [Auth]
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                 username:
 *                    type: string
 *                    example: 998940102003
 *                 password:
 *                   type: string
 *                   example: 77792003
 *     responses:
 *       200:
 *         description: Create admin.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: succesfull
 *                 data:
 *                    type: string
 *                    example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTY4ZDFlLWUzNTctNDgzNS05YzM2LTMzMGY3MmEyYjJhNiIsImlhdCI6MTY5MTgyNzA1MSwiZXhwIjoxNjkyMDg2MjUxfQ.YBAK3LZ0ByOTKh7ttBGS9voDtjSjq_zyBHkKbzqArYc
 */