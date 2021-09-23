import React from 'react';
import PropTypes from 'prop-types';

export type SkillProps = {
  votes: number;
  title: string;
};

function Skill({ votes, title }: SkillProps): JSX.Element {
  return (
    <li>
      {title}
      <span className="votes">{votes}</span>
    </li>
  );
}

export default Skill;

Skill.propTypes = {
  votes: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
