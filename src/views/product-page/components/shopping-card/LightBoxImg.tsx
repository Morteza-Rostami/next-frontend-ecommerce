import React, { useMemo, useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

function LightBoxImg({
  activeImg,
  product,
  images,
  toggler,
}: any) {
	// To open the lightbox change the value of the "toggler" prop.

	return (
		<>
      <FsLightbox
				toggler={toggler}
				sources={Object.values(images)}
        /// url of active image
        source={activeImg}
        type={'image'}
        thumbs={[
          null, // The thumb will be created automatically.
        ]}
			/>
    </>
	);
}

export default LightBoxImg;