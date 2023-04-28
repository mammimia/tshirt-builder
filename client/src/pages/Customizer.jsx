import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useSnapshot } from 'valtio';

import config from '../config/config';
import state from '../store/Store';
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';

const Customizer = () => {
  return <div>Customizer</div>;
};

export default Customizer;
