import { motion } from 'framer-motion';
import React from 'react';
import Loading from './Loading';

const Account = ({ children, loading, error, type }) => {
  return (
    <div className="flex flex-col my-8 text-white w-64 sm:w-70">
      <div className="w-max mx-auto mb-2">
        {type && (
          <motion.h1
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            className="text-5xl font-sans text-center mb-4">
            {type}
          </motion.h1>
        )}
        {!loading && (
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            className="w-full h-1 bg-gradient-to-r from-red-500 via-purple-500 to-red-500"
          />
        )}
        {loading && <Loading type={type} />}
      </div>
      {error && (
        <h1 className="text-rose-500 rounded-sm text-center py-2 my-2 ">
          {error}
        </h1>
      )}
      <br />

      {children}
    </div>
  );
};

export default Account;
