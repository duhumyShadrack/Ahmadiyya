// packages/finance/erpSync.ts

/**
 * ERP Sync Module
 * Handles integration with external ERP systems (NetSuite, SAP).
 * Replace placeholders with actual API endpoints and credentials.
 */

import axios from 'axios';

export async function syncToERP(transaction: any) {
  try {
    // Example: NetSuite REST API integration
    const netsuiteResponse = await axios.post(
      process.env.NETSUITE_API_URL + '/transactions',
      {
        customer: transaction.customer,
        amount: transaction.amount,
        status: transaction.status,
        created_at: transaction.created_at,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NETSUITE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('NetSuite Sync Success:', netsuiteResponse.data);

    // Example: SAP S/4HANA OData integration
    const sapResponse = await axios.post(
      process.env.SAP_API_URL + '/FinanceTransactions',
      {
        Customer: transaction.customer,
        Amount: transaction.amount,
        Status: transaction.status,
        CreatedAt: transaction.created_at,
      },
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            process.env.SAP_USERNAME + ':' + process.env.SAP_PASSWORD
          ).toString('base64')}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('SAP Sync Success:', sapResponse.data);

    return { netsuite: netsuiteResponse.data, sap: sapResponse.data };
  } catch (error: any) {
    console.error('ERP Sync Error:', error.message);
    throw new Error('Failed to sync transaction to ERP systems');
  }
}

