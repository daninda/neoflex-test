import styled from 'styled-components';
import { theme } from '../../styles';

export const Wrapper = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${theme.color.secondary};
  border-radius: ${theme.borderRadius.normal};
  box-shadow: ${theme.shadow.primary};
`;

export const ImageWrapper = styled.div`
  padding: 2rem 6rem 4rem;
  display: flex;
  align-items: center;
  height: 100%;
  border-radius: ${theme.borderRadius.normal};
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const Info = styled.div`
  padding: 0 2rem 2rem;
`;

export const Title = styled.h3`
  font-size: ${theme.fontSize.small};
  font-weight: ${theme.fontWeight.normal};
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

export const Icon = styled.div`
  fill: ${theme.color.accent};
  opacity: 0.6;
`;

export const RateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: ${theme.fontSize.small};
  color: ${theme.color.tertiary};
`;
