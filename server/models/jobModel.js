import { query } from '../config/db.js';

export const JobModel = {
  async findAll({ search, location }) {
    const queryParams = [];
    let sqlQuery = `
      SELECT * FROM jobs 
      WHERE status = 'published'
    `;

    if (search) {
      queryParams.push(`%${search}%`);
      sqlQuery += ` AND (title ILIKE $${queryParams.length} 
        OR description ILIKE $${queryParams.length} 
        OR company ILIKE $${queryParams.length})`;
    }

    if (location) {
      queryParams.push(`%${location}%`);
      sqlQuery += ` AND location ILIKE $${queryParams.length}`;
    }

    sqlQuery += ' ORDER BY created_at DESC';

    const { rows } = await query(sqlQuery, queryParams);
    return rows;
  },

  async create(jobData) {
    const { rows } = await query(
      `INSERT INTO jobs (
        title, company, location, type, description, 
        requirements, salary, user_id
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
      RETURNING *`,
      [
        jobData.title,
        jobData.company,
        jobData.location,
        jobData.type,
        jobData.description,
        jobData.requirements,
        jobData.salary,
        jobData.userId
      ]
    );
    return rows[0];
  },

  async findById(id) {
    const { rows } = await query('SELECT * FROM jobs WHERE id = $1', [id]);
    return rows[0];
  },

  async update(id, jobData) {
    const { rows } = await query(
      `UPDATE jobs 
       SET title = $1, company = $2, location = $3, type = $4,
           description = $5, requirements = $6, salary = $7,
           updated_at = CURRENT_TIMESTAMP
       WHERE id = $8 AND user_id = $9
       RETURNING *`,
      [
        jobData.title,
        jobData.company,
        jobData.location,
        jobData.type,
        jobData.description,
        jobData.requirements,
        jobData.salary,
        id,
        jobData.userId
      ]
    );
    return rows[0];
  },

  async delete(id, userId) {
    const { rowCount } = await query(
      'DELETE FROM jobs WHERE id = $1 AND user_id = $2',
      [id, userId]
    );
    return rowCount > 0;
  }
};