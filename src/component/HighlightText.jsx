import React from 'react';

const ReviewComponent = ({ data }) => {
  const highlightContent = () => {
    const { content, analytics } = data;

   
    if (!analytics || !content) {
      return content;
    }

    let highlightedContent = content;


    analytics.forEach(analytic => {
      const { sentences, sentiment, highlight_indices } = analytic;

  
      let backgroundColor = '';
      if (sentiment === 'Positive') {
        backgroundColor = '#D9F2DD';
      } else if (sentiment === 'Negative') {
        backgroundColor = '#F2DBD9';
      } else if (sentiment === 'Mixed') {
        backgroundColor = '#e8bd6d3d';
      } else {
        backgroundColor = '#eaf09b6b'; 
      }

   
      highlight_indices.forEach(indices => {
        const [start, end] = indices;
        const before = highlightedContent.substring(0, start);
        const highlighted = highlightedContent.substring(start, end);
        const after = highlightedContent.substring(end);

 
        highlightedContent = `${before}<span style="background-color: ${backgroundColor};">${highlighted}</span>${after}`;
      });
    });

    return <div dangerouslySetInnerHTML={{ __html: highlightedContent }} />;
  };

  return (
    <div>
      {highlightContent()}
    </div>
  );
};

export default ReviewComponent;
